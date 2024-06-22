export function formatBalance(balance) {
  const bal = parseFloat(balance);
  const balanceStr = bal.toString().slice(0, 6);
  if (balanceStr.length < bal.toString().length) {
    return balanceStr + "...";
  }
  return balanceStr;
}
