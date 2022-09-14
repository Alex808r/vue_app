class AddColumnNameToStaff < ActiveRecord::Migration[6.1]
  def change
    add_column :staffs, :name, :string
  end
end
