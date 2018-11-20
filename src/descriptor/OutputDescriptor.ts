export class OutputDescriptor {
  shape: Array<number>;
  earlyExit: boolean;
  static from(obj: any) {
    let d = new OutputDescriptor();
    return d;
  }
  static copy(other) {
    if (other) {
      return OutputDescriptor.from(other.json());
    } else {
      return new OutputDescriptor();
    }
  }
  json() {
    return {
      shape: this.shape ? this.shape : undefined,
      earlyExit: this.earlyExit ? this.earlyExit : undefined
    };
  }
}
