import _ from 'lodash';
import NestedComponent from '../nested/NestedComponent';

export default class TableComponent extends NestedComponent {
  static emptyTable(numRows, numCols) {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const cols = [];
      for (let j = 0; j < numCols; j++) {
        cols.push({ components: [] });
      }
      rows.push(cols);
    }
    return rows;
  }

  static schema(...extend) {
    return NestedComponent.schema({
      type: 'table',
      input: false,
      key: 'table',
      numRows: 3,
      numCols: 3,
      rows: TableComponent.emptyTable(3, 3),
      header: [],
      caption: '',
      striped: false,
      bordered: false,
      hover: false,
      condensed: false,
      persistent: false
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Table',
      group: 'layout',
      icon: 'fa fa-table',
      weight: 40,
      documentation: 'http://help.form.io/userguide/#table',
      schema: TableComponent.schema()
    };
  }

  constructor(component, options, data) {
    const originalRows = _.cloneDeep(component.rows);
    super(component, options, data);
    if (!_.isEqual(originalRows, this.component.rows)) {
      this.component.rows = originalRows;
    }
  }

  get defaultSchema() {
    return TableComponent.schema();
  }

  get schema() {
    const schema = _.omit(super.schema, 'components');
    schema.rows = TableComponent.emptyTable(this.component.numRows, this.component.numCols);
    this.eachComponent((component) => {
      const row = schema.rows[component.tableRow];
      const col = row && row[component.tableColumn];
      if (!row || !col) {
        return false;
      }
      schema.rows[component.tableRow][component.tableColumn].components.push(component.schema);
    });
    return schema;
  }

  /**
   *
   * @param element
   * @param data
   */
  addComponents(element, data, options, state) {
    // Build the body.
    this.tbody = this.ce('tbody');
    _.each(this.component.rows, (row, rowIndex) => {
      const tr = this.ce('tr');
      _.each(row, (column, colIndex) => {
        const td = this.ce('td', {
          id: `${this.id}-${rowIndex}-${colIndex}`
        });
        _.each(column.components, (comp) => {
          const component = this.addComponent(comp, td, data, null, null, state);
          component.tableRow = rowIndex;
          component.tableColumn = colIndex;
        });

        if (this.options.builder) {
          if (!column.components || !column.components.length) {
            td.appendChild(this.ce('div', {
              id: `${this.id}-${rowIndex}-${colIndex}-placeholder`,
              class: 'alert alert-info',
              style: 'text-align:center; margin-bottom: 0px;',
              role: 'alert'
            }, this.text('Drag and Drop a form component')));
          }
          this.root.addDragContainer(td, this, {
            onSave(component) {
              component.tableRow = rowIndex;
              component.tableColumn = colIndex;
            }
          });
        }

        tr.appendChild(td);
      });
      this.tbody.appendChild(tr);
    });
  }

  buildHeader() {
    if (this.component.header && this.component.header.length) {
      const thead = this.ce('thead');
      const thr = this.ce('tr');
      _.each(this.component.header, (header) => {
        const th = this.ce('th');
        th.appendChild(this.text(header));
        thr.appendChild(th);
      });
      thead.appendChild(thr);
      this.table.appendChild(thead);
    }
  }

  build(state) {
    this.element = this.ce('div', {
      id: this.id,
      class: `${this.className}  table-responsive`,
    });
    this.element.component = this;

    let tableClass = 'table ';
    _.each(['striped', 'bordered', 'hover', 'condensed'], (prop) => {
      if (this.component[prop]) {
        tableClass += `table-${prop} `;
      }
    });
    this.table = this.ce('table', {
      class: tableClass
    });

    this.buildHeader();
    this.addComponents(null, null, null, state);
    this.table.appendChild(this.tbody);
    this.element.appendChild(this.table);
    this.attachLogic();
  }
}
