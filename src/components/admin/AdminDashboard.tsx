import { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, LogOut, Plus, Pencil, Trash2 } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";
import { useAuth } from "@/hooks/useAuth";
import { CATEGORY_LABEL } from "@/data/seedData";
import { formatMoney } from "@/utils/formatters";
import { Button } from "@/components/ui/Button";
import { MenuImage } from "@/components/ui/MenuImage";
import { ItemFormModal } from "./ItemFormModal";
import { ConfirmModal } from "./ConfirmModal";
import type { MenuItem, MenuItemInput } from "@/types";

export function AdminDashboard() {
  const { menu, addItem, updateItem, deleteItem } = useMenu();
  const { logout } = useAuth();
  const [formOpen, setFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<MenuItem | null>(null);

  const openAddForm = () => {
    setEditingItem(null);
    setFormOpen(true);
  };

  const openEditForm = (item: MenuItem) => {
    setEditingItem(item);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingItem(null);
  };

  const handleSave = (data: MenuItemInput) => {
    if (editingItem) updateItem(editingItem.id, data);
    else addItem(data);
    closeForm();
  };

  const confirmDelete = () => {
    if (deleteTarget) deleteItem(deleteTarget.id);
    setDeleteTarget(null);
  };

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-espresso px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-cream">
          <Coffee size={20} className="text-brass" aria-hidden="true" />
          <span className="italic font-display">
            Coffee&amp;Co<span className="hidden sm:inline"> — Админ-панель</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs text-cream/80 hover:text-cream font-body">
            Открыть сайт
          </Link>
          <button onClick={logout} className="text-xs flex items-center gap-1 text-clayLight font-body">
            <LogOut size={14} aria-hidden="true" /> Выйти
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl italic text-espresso font-display">Позиции меню ({menu.length})</h1>
          <Button onClick={openAddForm} className="flex items-center gap-2">
            <Plus size={16} aria-hidden="true" /> Добавить позицию
          </Button>
        </div>

        <div className="rounded-sm border border-sand overflow-x-auto">
          <table className="w-full text-sm font-body">
            <caption className="sr-only">Список позиций меню</caption>
            <thead>
              <tr className="bg-creamDark text-ink">
                <th scope="col" className="text-left px-3 sm:px-4 py-3 font-normal w-16 sm:w-20">
                  Фото
                </th>
                <th scope="col" className="text-left px-3 sm:px-4 py-3 font-normal">
                  Название
                </th>
                <th scope="col" className="hidden md:table-cell text-left px-4 py-3 font-normal">
                  Категория
                </th>
                <th scope="col" className="hidden md:table-cell text-left px-4 py-3 font-normal">
                  Цена
                </th>
                <th scope="col" className="text-right px-3 sm:px-4 py-3 font-normal">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item) => (
                <tr key={item.id} className="border-t border-sand">
                  <td className="px-3 sm:px-4 py-3">
                    <MenuImage src={item.imageUrl} alt="" category={item.category} className="w-12 h-12 rounded-sm" iconSize={20} />
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-espresso">
                    {item.name}
                    {/* На мобильных категория и цена показываются под названием */}
                    <span className="block md:hidden text-xs text-ink/80 mt-0.5">
                      {CATEGORY_LABEL[item.category]} · {formatMoney(item.price)}
                    </span>
                  </td>
                  <td className="hidden md:table-cell px-4 py-3 text-ink/80">{CATEGORY_LABEL[item.category]}</td>
                  <td className="hidden md:table-cell px-4 py-3 text-ink/80 whitespace-nowrap">{formatMoney(item.price)}</td>
                  <td className="px-3 sm:px-4 py-3">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => openEditForm(item)}
                        className="text-ink/70 hover:text-espresso"
                        aria-label={`Редактировать: ${item.name}`}
                      >
                        <Pencil size={16} aria-hidden="true" />
                      </button>
                      <button
                        onClick={() => setDeleteTarget(item)}
                        className="text-clayDark hover:opacity-80"
                        aria-label={`Удалить: ${item.name}`}
                      >
                        <Trash2 size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {menu.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-ink/80">
                    Меню пусто. Добавьте первую позицию.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {formOpen && <ItemFormModal initial={editingItem} onCancel={closeForm} onSave={handleSave} />}

      {deleteTarget && (
        <ConfirmModal
          text={`Вы уверены? Позиция «${deleteTarget.name}» будет удалена.`}
          onCancel={() => setDeleteTarget(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}
