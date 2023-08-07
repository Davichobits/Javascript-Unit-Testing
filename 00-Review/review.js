export const fetchingData = async (url) => {
  const result = await fetch(url);
  const data = await result.json()
  return
}