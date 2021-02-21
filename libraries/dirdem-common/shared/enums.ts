export enum ElectronicUnitMeasuresEnum {
  Bit = 'Bit',
  Bytes = 'Bytes',
  KBytes = 'KBytes',
  Megabytes = 'Megabytes',
  Gigabytes = 'Gigabytes'
}

export enum CurrentsMeasureUnitEnum {
  pA = 'pA',
  nA = 'nA',
  uA = 'uA',
  mA = 'mA',
  A = 'A'
}

export enum VoltageUnitMeasuresEnum {
  uV = 'uV',
  mV = 'mV',
  V = 'V',
  KV = 'KV'
}

export enum FrequenciesMeasureUnitEnum {
  Hz = 'Hz',
  KHz = 'KHz',
  MHz = 'MHz',
  GHz = 'GHz'
}

export enum TemperatureMeasuresEnum {
  Celsius = 'Celsius',
  Kelvin = 'Kelvin'
}

export enum AvrdudeFuseTypeEnum {
  lfsue = 'lfuse',
  hfuse = 'hfuse',
  efuse = 'efuse',
  lock = 'lock'
}

export enum CommunicationInterfaceNamesEnum {
  JTAG = 'JTAG',
  ISP = 'ISP',
  TWI = 'TWI',
  USART = 'USART',
  SPI = 'SPI'
}

export enum CommunicationInterfaceTypesEnum {
  Serial = 'Serial'
}

export enum PowerConsumptionModeNamesEnum {
  Active = 'Active'
}

export enum ClockFrequenciesOscillatorTypeEnum {
  Internal = 'Internal',
  External = 'External'
}

export enum ClockFrequenciesOscillatorMaterialEnum {
  Crystal = 'Crystal',
  RC = 'RC',
  Ceramic = 'Ceramic'
}

export enum FusesTypeEnum {
  LOW = 'LOW',
  HIGH = 'HIGH',
  EXTENDED = 'EXTENDED',
  LOCKBIT = 'LOCKBIT'
}

export enum FuseBitLabelEnum {
  CKSEL0 = 'CKSEL0',
  CKSEL1 = 'CKSEL1',
  CKSEL2 = 'CKSEL2',
  CKSEL3 = 'CKSEL3',
  SUT0 = 'SUT0',
  SUT1 = 'SUT1',
  CKOUT = 'CKOUT',
  BOOTRST = 'BOOTRST',
  BOOTSZ0 = 'BOOTSZ0',
  BOOTSZ1 = 'BOOTSZ1',
  EESAVE = 'EESAVE',
  WDTON = 'WDTON',
  SPIEN = 'SPIEN',
  DWEN = 'DWEN',
  CKDIV8 = 'CKDIV8',
  BODLEVEL = 'BODLEVEL',
  BODLEVEL0 = 'BODLEVEL0',
  BODLEVEL1 = 'BODLEVEL1',
  BODLEVEL2 = 'BODLEVEL2',
  BODEN = 'BODEN',
  OCDEN = 'OCDEN',
  JTAGEN = 'JTAGEN',
  CKOPT = 'CKOPT',
  RSTDISBL = 'RSTDISBL',
  Bit0 = 'Bit0',
  Bit1 = 'Bit1',
  Bit2 = 'Bit2',
  Bit3 = 'Bit3',
  Bit4 = 'Bit4',
  Bit5 = 'Bit5',
  Bit6 = 'Bit6',
  Bit7 = 'Bit7'
}

export enum MemorySegmentNamesEnum {
  Flash = 'Flash',
  EEPROM = 'EEPROM',
  SRAM = 'SRAM'
}

export enum MicroFamiliesEnum {
  AVR = 'AVR'
}

export enum MicroBrandsEnum {
  Atmel = 'Atmel'
}

export enum MicrocontrollerNamesEnum {
  ATmega32 = 'ATmega32',
  ATmega328P = 'ATmega328P'
}

export enum PinLabelsEnum {
  PA0 = 'PA0',
  PA1 = 'PA1',
  PA2 = 'PA2',
  PA3 = 'PA3',
  PA4 = 'PA4',
  PA5 = 'PA5',
  PA6 = 'PA6',
  PA7 = 'PA7',
  PB0 = 'PB0',
  PB1 = 'PB1',
  PB2 = 'PB2',
  PB3 = 'PB3',
  PB4 = 'PB4',
  PB5 = 'PB5',
  PB6 = 'PB6',
  PB7 = 'PB7',
  PC0 = 'PC0',
  PC1 = 'PC1',
  PC2 = 'PC2',
  PC3 = 'PC3',
  PC4 = 'PC4',
  PC5 = 'PC5',
  PC6 = 'PC6',
  PC7 = 'PC7',
  PD0 = 'PD0',
  PD1 = 'PD1',
  PD2 = 'PD2',
  PD3 = 'PD3',
  PD4 = 'PD4',
  PD5 = 'PD5',
  PD6 = 'PD6',
  PD7 = 'PD7',
  ADC0 = 'ADC0',
  ADC1 = 'ADC1',
  ADC2 = 'ADC2',
  ADC3 = 'ADC3',
  ADC4 = 'ADC4',
  ADC5 = 'ADC5',
  ADC6 = 'ADC6',
  ADC7 = 'ADC7',
  T0 = 'T0',
  T1 = 'T1',
  INT0 = 'INT0',
  INT1 = 'INT1',
  INT2 = 'INT2',
  AIN0 = 'AIN0',
  AIN1 = 'AIN1',
  OC0 = 'OC0',
  OC1A = 'OC1A',
  OC1B = 'OC1B',
  OC2 = 'OC2',
  ICP1 = 'ICP1',
  MOSI = 'MOSI',
  MISO = 'MISO',
  XCK = 'XCK',
  SCK = 'SCK',
  RXD = 'RXD',
  TXD = 'TXD',
  TDI = 'TDI',
  TDO = 'TDO',
  TMS = 'TMS',
  TCK = 'TCK',
  SDA = 'SDA',
  SCL = 'SCL',
  SS = 'SS',
  RESET = 'RESET',
  VCC = 'VCC',
  GND = 'GND',
  AVCC = 'AVCC',
  AREF = 'AREF',
  XTAL1 = 'XTAL1',
  XTAL2 = 'XTAL2',
  TOSC2 = 'TOSC2',
  TOSC1 = 'TOSC1',

  //ATMEGA328P
  PCINT0 = 'PCINT0',
  PCINT1 = 'PCINT1',
  PCINT2 = 'PCINT2',
  PCINT3 = 'PCINT3',
  PCINT4 = 'PCINT4',
  PCINT5 = 'PCINT5',
  PCINT6 = 'PCINT6',
  PCINT7 = 'PCINT7',
  PCINT8 = 'PCINT8',
  PCINT9 = 'PCINT9',
  PCINT10 = 'PCINT10',
  PCINT11 = 'PCINT12',
  PCINT13 = 'PCINT13',
  PCINT14 = 'PCINT14',
  PCINT15 = 'PCINT15',
  PCINT16 = 'PCINT16',
  PCINT17 = 'PCINT17',
  PCINT18 = 'PCINT18',
  PCINT19 = 'PCINT19',
  PCINT20 = 'PCINT20',
  PCINT21 = 'PCINT21',
  PCINT22 = 'PCINT22',
  PCINT23 = 'PCINT23',
}

export enum PinTypesEnum {
  I = 'I',
  O = 'O',
  IO = 'IO'
}

export enum PinPortsEnum {
  PORTA = 'PORTA',
  PORTB = 'PORTB',
  PORTC = 'PORTC',
  PORTD = 'PORTD'
}

export enum MicrocontrollerPackageEnum {
  PDIP = 'PDIP',
  TQFP = 'TQFP',
  MLF = 'MLF'
}

export enum MicrocontrollerTimerInterruptSourcesListEnum {
  TOV0 = 'TOV0',
  OCF0A = 'OCF0A',
  OCF0B = 'OCF0B'
}


export enum MicrocontrollerTimerFeaturesNameEnum {
  OCU = 'OCU',
  CTC = 'CTC',
  PWM = 'PWM',
  WGM = 'WGM'
}

export enum MicrocontrollerTimerFeaturesDescriptionEnum {
  OCU = 'Output Compare Unit',
  CTC = 'Clear Timer on Compare Match (Auto Reload)',
  PWM = 'Pulse Width Modulation',
  WGM = 'Waveform Generation Mode'
}

export enum MicrocontrollerTimerNamesEnum {
  Timer0 = 'Timer0',
  Timer1 = 'Timer1',
  Timer2 = 'Timer2',
}

export enum MicrocontrollerTimerModeNamesEnum { }

export enum MicrocontrollerAdcNamesEnum {
  Adc0 = 'Adc0',
  Adc1 = 'Adc1',
  Adc2 = 'Adc2',
  Adc3 = 'Adc3',
  Adc4 = 'Adc4',
  Adc5 = 'Adc5',
  Adc6 = 'Adc6',
  Adc7 = 'Adc7'
}

export enum MicrocontrollerAnalogComparatorNamesEnum {
  AC0 = 'AC0'
}

export enum MicrontrollerSleepModeNamesEnum {
  SleepMode1 = 'SleepMode1'
}
