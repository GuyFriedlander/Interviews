import Toolbar from '@mui/material/Toolbar'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useState } from 'react'
import Modal from '@mui/material/Modal'
import { Box, Button } from '@mui/material'

interface ToolbarProps {
  numSelected: number
  onDelete: () => void
}

const TableToolbar = ({ numSelected, onDelete }: ToolbarProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleDeleteClick = () => {
    setOpen(false)
    onDelete()
  }
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Users
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={() => setOpen(!open)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete these items?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This action can not be undone
          </Typography>
          <Button onClick={handleDeleteClick}> Delete </Button>
          <Button onClick={() => setOpen(false)}> Cancel </Button>
        </Box>
      </Modal>
    </Toolbar>
  )
}

export default TableToolbar
