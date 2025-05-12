import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signup as signupApi } from '../../services/apiAuth'
import toast from 'react-hot-toast'

export function useSignup() {
  //   const queryClient = useQueryClient()
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: user => {
      console.log(user),
        toast.success(
          "Account created successfully! please verify the new account from the user's email address"
        )
    },
  })
  return { signup, isLoading }
}
// onSuccess: queryClient.setQueryData('user', data),
