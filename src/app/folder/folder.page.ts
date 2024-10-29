import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  folder = "Item Management";
  itemName: string = '';
  items: string[] = [];
  isEditing: boolean = false;
  editingIndex: number | null = null;

  addItem() {
    if (this.itemName.trim()) {
      this.items.push(this.itemName.trim());
      this.itemName = '';
    }
  }

  editItem(index: number) {
    this.isEditing = true;
    this.editingIndex = index;
    this.itemName = this.items[index];
  }

  updateItem() {
    if (this.editingIndex !== null && this.itemName.trim()) {
      this.items[this.editingIndex] = this.itemName.trim();
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingIndex = null;
    this.itemName = '';
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
