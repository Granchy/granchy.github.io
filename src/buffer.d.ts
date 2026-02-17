declare module 'buffer' {
  export class Buffer {
    static from(data: string | ArrayBuffer): Buffer
    static isBuffer(obj: any): boolean
    toString(encoding?: string): string
  }
}
