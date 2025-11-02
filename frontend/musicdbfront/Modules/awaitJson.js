export async function getJson(link)
{
    const response = await fetch(link)
    if(!response.ok)
        {
            throw new Error("a csatlakozás sikertelen volt!!!");
        }
    return response.json();
}