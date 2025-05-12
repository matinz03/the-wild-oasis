import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { login as loginAPI } from '../../services/apiAuth'
import toast from 'react-hot-toast'
function useLogin() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: user => {
      queryClient.setQueryData(['user'], user.user)
      navigate('/dashboard', { replace: true })
    },
    onError: err => {
      toast.error(err.message)
    },
  })
  return { login, isLoading }
}

export default useLogin
