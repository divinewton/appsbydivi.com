export class AppCard {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly description: string,
    public readonly imageSrc: string,
    public readonly imageAlt: string,
    public readonly href?: string,
  ) {}

  get isAvailable(): boolean {
    return Boolean(this.href);
  }
}
