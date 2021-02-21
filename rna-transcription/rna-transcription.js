export const toRna = (dnaStrand) => {
  const dnaStrandToArray = dnaStrand.split('');
  const dnaMap = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };
  
  return dnaStrand ? dnaStrandToArray.map(nucleotide => dnaMap[nucleotide]).join('') : '';
};