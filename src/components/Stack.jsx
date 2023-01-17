import { Stack } from "@mui/system"

const MyStack = ({children, ...props}) => {
  return (
    <Stack {...props}>{children}</Stack>
  )
}
export default MyStack