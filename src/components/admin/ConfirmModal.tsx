import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

interface ConfirmModalProps {
  text: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ConfirmModal({ text, onCancel, onConfirm }: ConfirmModalProps) {
  return (
    <Modal ariaLabel="Подтверждение удаления" onClose={onCancel} maxWidth="sm">
      <p className="text-sm mb-6 text-espresso font-body">{text}</p>
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1" onClick={onCancel}>
          Отмена
        </Button>
        <Button variant="danger" className="flex-1" onClick={onConfirm}>
          Удалить
        </Button>
      </div>
    </Modal>
  );
}
