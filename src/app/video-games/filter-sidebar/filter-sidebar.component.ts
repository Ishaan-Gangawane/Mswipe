import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent {
  filters = {
    name: '',
    score: '',
    orderBy: ''
  };

  @Output() filtersChanged = new EventEmitter<any>();
  @Output() filtersCleared = new EventEmitter<void>();

  applyFilters(): void {
    console.log('Applying filters:', this.filters); // ✅ Debug
    this.filtersChanged.emit({ ...this.filters });
  }

  clearFilters(): void {
    this.filters = { name: '', score: '', orderBy: '' };
    this.filtersCleared.emit();
  }
}
