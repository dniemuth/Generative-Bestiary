export const profCalc = (cr: number) => cr === 0 ? 2 : Math.ceil(cr/4)+1;

export const modifierCalc = (score: number) => Math.floor((score - 10)/2);

export const createMessage = (prompt: IStatFormFields) => {
  const cr = prompt.cr ? `Challenge Rating should be ${prompt.cr}. ` : '';
  const type = prompt.type ? `Type should be ${prompt.type}. ` : '';
  const size = prompt.size ? `Size should be ${prompt.size}. ` : '';
  return `${cr}${type}${size}${prompt.details ?? ''}`;
}

export const cleanPALMResponse = (output: string): string =>
  output.replace("```JSON", "").replace("```json", "").replace("```", "");