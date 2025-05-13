import toast from 'react-hot-toast'
import supabase, { supabaseUrl } from './supabase'

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, avatar: '' } },
  })
  if (error) throw new Error(error.message)

  return data
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
    // email: import.meta.env.VITE_SUPABASE_USER_EMAIL,
    // password: import.meta.env.VITE_SUPABASE_USER_PASSWORD,
  })
  if (error) throw new Error(error.message)

  return data
}
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession()
  if (!session.session) return null
  const { data, error } = await supabase.auth.getUser()
  console.log(data)
  if (error) throw new Error(error.message)
  return data.user
}

export async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) toast.error(error.message)
}
export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData
  if (password) updateData = { password }
  if (fullName) updateData = { data: { fullName } }
  const { data, error } = await supabase.auth.updateUser(updateData)
  if (error) throw new Error(error.message)
  if (!avatar) return data

  const fileName = `avatar-${data.user.id}-${Math.random()}`
  const { error: avatarStorageError } = await supabase.storage
    .from('avatars')
    .upload(fileName, avatar)
  if (avatarStorageError)
    throw new Error('Could not upload the avatar', error.message)
  const { data: updatedUser, error: updatingAvatarError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    })
  if (updatingAvatarError)
    throw new Error('Could not set the avatar url into user', error.message)
  return updatedUser
}
