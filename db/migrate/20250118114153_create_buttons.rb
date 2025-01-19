class CreateButtons < ActiveRecord::Migration[7.2]
  def change
    create_table :buttons do |t|
      t.string :name
      t.integer :count
      t.references :countdown, null: false, foreign_key: true

      t.timestamps
    end
  end
end
