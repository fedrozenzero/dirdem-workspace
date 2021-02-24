import { MemorySegmentNamesEnum } from '../../shared/enums';
import { ElectronicUnit } from './electronic-unit';

export interface MemorySegment {
  memorySegmentName: MemorySegmentNamesEnum;
  memorySegmentValue: ElectronicUnit;
}
