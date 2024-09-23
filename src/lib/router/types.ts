export interface RouterRecordRaw {
  name: string
  path: string
  component: HTMLElement
  children?: RouterRecordRaw[]
}

export interface RouterInterface {}
