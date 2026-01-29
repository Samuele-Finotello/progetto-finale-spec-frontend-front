export type Wine = {
  readonly title: string,
  readonly category: 'rosso' | 'bianco' | 'rosé',
  readonly price: number,
  readonly year: number,
  readonly country: string,
  readonly alcohol: number,
  readonly image: string,
  readonly description: string
}