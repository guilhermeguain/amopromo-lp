export function contentServices() {
  async function getContent(url: string) {
    const response = await fetch(url)

    const data = await response.json()

    return data
  }

  return {
    getContent,
  }
}
