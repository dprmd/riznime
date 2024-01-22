export async function fetchJikanApi(path) {
  try {
    const request = await fetch(`https://api.jikan.moe/v4${path}`)
    const response = await request.json()
    return response
  } catch (err) {
    console.log(err)
  }
}
