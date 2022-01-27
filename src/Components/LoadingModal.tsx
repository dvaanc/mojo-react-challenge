import { 
  Box,
  LinearProgress,
  Modal
} from '@mui/material'

const style = {
  position: 'aboslute',
  top: '50%',
  left: '50%',
  pointerEvents: 'none', 
  backgroundColor: 'black'
}
interface LoadingModalProps {
  show: boolean
}
export default function LoadingModal({ show }: LoadingModalProps) {
  return (
    <Modal open={show}>
      <Box sx={{ style }}>
        <LinearProgress />
      </Box>
    </Modal>
  )
}
