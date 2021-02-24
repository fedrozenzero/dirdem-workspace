import { ChangeDetectorRef, Component } from "@angular/core"
import { Router } from "@angular/router"
import { AvrMicrocontroller, LoaderService, MAIN_IN_PROCESSES, MAIN_OUT_PROCESSES } from "libraries/dirdem-common/public-api"
import { ElectronService } from "ngx-electron"
import { FuseBitModuleRoutesPathEnum } from "../../shared/enums"


@Component({
  selector: 'app-fuse-bit-card',
  templateUrl: './fuse-bit-card.component.html',
  styleUrls: ['./fuse-bit-card.component.css']
})
export class FuseBitCardComponent  {
  microcontroller: AvrMicrocontroller
  fuseOutputIsFlashing: boolean = false

  constructor(private router: Router, private electronService: ElectronService,
    private loaderService: LoaderService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    /**
    * Sottoscrizione al completamento lettura fuse bit;
    */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.readFusesCompleted, (evt, results) => {
      this.loaderService.show()
      this.microcontroller.setFusesReaded(results)
      this.cdr.detectChanges()
      this.flashOutuptFuse(3)
    })
  }

  /**
   * Apertura configurazione Fuse bit
   */
  openFuseBitComponent(evt): void {
    this.router.navigate([FuseBitModuleRoutesPathEnum.Configuration])
  }

  /**
  * Lettura hardware dei fuse bit
  */
  readHWFuses(fuses: any []): void {
    this.loaderService.show()
    console.log(fuses)
    let avrdudeMicroLabel = this.microcontroller.avrLabel
    let fusesToRead = fuses.map(fuse => {
      return ({ avrdudeFuseType: AvrMicrocontroller.fuseBitTypeToAvrdudeFuseBitType(fuse.type), fuseType: fuse.type })
    })
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.readFuses, [avrdudeMicroLabel, fusesToRead])
  }

  /**
   * Lampeggiamento su GUI del fuse bit letto
   * @param flashingTime Durata del' effetto di lampeggiamento che viene applicato al css
   */
  private flashOutuptFuse(flashingTime: number) {
    this.fuseOutputIsFlashing = true
    setTimeout(()=> {
      this.fuseOutputIsFlashing = false
    }, 3000)
    this.cdr.detectChanges()
  }

}
