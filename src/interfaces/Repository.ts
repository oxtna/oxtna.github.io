interface Repository {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly html_url: string;
  readonly topics: Array<string>;
}

export default Repository;
