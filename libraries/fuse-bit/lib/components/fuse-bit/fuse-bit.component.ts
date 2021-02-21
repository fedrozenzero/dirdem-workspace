import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { AvrMicrocontroller } from 'libraries/dirdem-common/models/typeScript/avr-microcontroller';
import { FuseBit } from 'libraries/dirdem-common/models/typeScript/fuse-bit';
import { ConverterUtilities } from 'libraries/dirdem-common/utilities/ConverterUtilities';
import { ElectronService } from 'ngx-electron';
import { LoaderService } from 'libraries/dirdem-common/services/loader.service';
import { Fuse } from 'libraries/dirdem-common/models/typeScript/fuse-bit-base';
import { MAIN_IN_PROCESSES } from 'libraries/dirdem-common/shared/constants';

@Component({
  selector: 'app-fuse-bit',
  templateUrl: './fuse-bit.component.html',
  styleUrls: ['./fuse-bit.component.css'],
})
export class FuseBitComponent {
  @Input() microcontroller: AvrMicrocontroller;

  columns: { index: number; columnDef: string; header: string; footer: string } [] = [];
  displayedColumns: string[] = [];
  dataSource: FuseBit[][] = [];

  constructor(private electronService: ElectronService, private loaderService: LoaderService, private cd: ChangeDetectorRef) { }

  ngOnChanges(): void {
    const fuseMatrix: FuseBit[][] = this.microcontroller?.fuses.map(fuse => this.orderBitForGUI(fuse.bits));
    this.dataSource = ConverterUtilities.matrixTranspose(fuseMatrix);
    // this.createTable(this.dataSource);
    this.microcontroller?.fuses?.forEach((fuse, i) => {
      this.columns.push({
        index: i,
        columnDef: fuse.type,
        header: fuse.type,
        footer: fuse.hexValue,
      });
      this.displayedColumns.push(fuse.type);
    });
  }

  onCellClicked(fuseType: string, fuseBit: FuseBit): void {
    let fuse: Fuse = this.microcontroller?.fuses?.find(
      (fuse) => fuse.type == fuseType
    );
    let bitToSet = fuse.bits.find((bit) => bit.label == fuseBit.label);
    bitToSet.value = !bitToSet.value;
    fuse.updateFuseByFuseBitArray(fuse.bits);
    this.columns = [];
    this.displayedColumns = [];
    this.cd.detectChanges();
    // GUI new rendering
    this.microcontroller?.fuses?.forEach((fuse, i) => {
      this.columns.push({
        index: i,
        columnDef: fuse.type,
        header: fuse.type,
        footer: fuse.hexValue,
      });
      this.displayedColumns.push(fuse.type);
    });
  }


  onFooterChange(hexValue: string, fuseType: string): void {
    this.microcontroller?.fuses?.forEach((fuse) => {
      if (fuse.type == fuseType) {
        fuse.updateFuseByHexValue(hexValue);
      }
    });
  }


  burnFuses(): void {
    this.loaderService.show();
    let avrdudeMicroLabel = this.microcontroller.avrLabel;
    let fusesToBurn = this.microcontroller?.fuses?.map((fuse: Fuse) => {
      return {
        avrdudeFuseType: AvrMicrocontroller.fuseBitTypeToAvrdudeFuseBitType(fuse.type),
        hexValue: `0x${fuse.hexValue}`
      };
    });
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.burnFuses, [
      avrdudeMicroLabel,
      fusesToBurn,
    ]);
  }


  private orderBitForGUI(fuseBitArray: FuseBit[]): FuseBit[] {
    let result = fuseBitArray.sort((a, b) => b.bit - a.bit);
    return result;
  }


  private createTable(tableData: FuseBit[][]) {
    const table = document.getElementById('fuse-bit-table'); //document.createElement('table');
    const tableBody = document.createElement('tbody');

    tableData.forEach((rowData) => {
      const row = document.createElement('tr');

      rowData.forEach(function (cellData) {
        const cell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = !cellData.value;
        const bitLabel = document.createTextNode(cellData.label);
        const bitPosition = document.createTextNode(cellData.bit.toString());

        cell.appendChild(checkbox);
        cell.appendChild(bitPosition);
        cell.appendChild(bitLabel);

        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
  }


}
