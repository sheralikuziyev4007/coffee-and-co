import { useState } from "react";
import { CATEGORIES } from "@/data/seedData";
import { Input, Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { validateMenuForm, type FormErrors, type MenuFormState } from "@/utils/validators";
import type { Category, MenuItem, MenuItemInput } from "@/types";

const EMPTY_FORM: MenuFormState = { name: "", category: "coffee", price: "", description: "", imageUrl: "" };

const CATEGORY_OPTIONS = CATEGORIES.map((c) => ({ value: c.id, label: c.label }));

interface ItemFormModalProps {
  initial: MenuItem | null;
  onCancel: () => void;
  onSave: (data: MenuItemInput) => void;
}

export function ItemFormModal({ initial, onCancel, onSave }: ItemFormModalProps) {
  const [form, setForm] = useState<MenuFormState>(
    initial
      ? {
          name: initial.name,
          category: initial.category,
          price: String(initial.price),
          description: initial.description,
          imageUrl: initial.imageUrl,
        }
      : EMPTY_FORM
  );
  const [errors, setErrors] = useState<FormErrors<MenuFormState>>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateMenuForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    onSave({
      name: form.name.trim(),
      category: form.category,
      price: Number(form.price),
      description: form.description.trim(),
      imageUrl: form.imageUrl.trim(),
    });
  };

  return (
    <Modal title={initial ? "Редактировать позицию" : "Новая позиция"} onClose={onCancel}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-4">
          <Input
            label="Название"
            value={form.name}
            maxLength={80}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            error={errors.name}
          />

          <Select
            label="Категория"
            value={form.category}
            options={CATEGORY_OPTIONS}
            onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
          />

          <Input
            label="Цена (сум)"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="28000"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            error={errors.price}
          />

          <Input
            label="Ссылка на изображение (необязательно)"
            type="text"
            inputMode="url"
            placeholder="/images/photo.webp или https://..."
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            error={errors.imageUrl}
          />

          <Textarea
            label="Описание"
            rows={3}
            maxLength={200}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            error={errors.description}
          />
        </div>

        <div className="flex gap-3 mt-6">
          <Button type="button" variant="outline" className="flex-1" onClick={onCancel}>
            Отмена
          </Button>
          <Button type="submit" className="flex-1">
            Сохранить
          </Button>
        </div>
      </form>
    </Modal>
  );
}
