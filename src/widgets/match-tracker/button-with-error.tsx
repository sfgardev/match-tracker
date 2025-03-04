import { Button } from '../../shared/ui/button'
import { Alert, Refresh } from '../../shared/ui/icons'

type Props = {
  isLoading: boolean
  onRefresh: () => void
}

export const ButtonWithError = ({ isLoading, onRefresh }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2.5 bg-[#0F1318] px-6 py-4 rounded-sm">
        <Alert />
        <p className="font-inter text-lg font-semibold text-white">
          Ошибка: не удалось загрузить информацию
        </p>
      </div>
      <Button disabled={isLoading} onClick={onRefresh}>
        <span>Обновить</span>
        <Refresh />
      </Button>
    </div>
  )
}
