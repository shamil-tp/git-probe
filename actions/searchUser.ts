'use server'

export const searchUser = async (formData: FormData) => {
    const username = formData.get('username')
    if (!username) return null

    const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            'Accept': 'application/vnd.github+json',
            'User-Agent': 'gitprobe-app',
            'Autherization':`Bearer ${process.env.GIT_HUB}`
        }
    })
    console.log(response)
    if (!response.ok) return { error: "User not found" }
    
    const data= await response.json()
    const userData = {
        login:data.login,
        name:data.name,
        avatar:data.avatar_url,
        repos:data.public_repos
    }

    console.log(userData)

    return userData
}