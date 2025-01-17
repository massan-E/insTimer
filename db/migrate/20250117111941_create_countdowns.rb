class CreateCountdowns < ActiveRecord::Migration[7.2]
  def change
    create_table :countdowns do |t|
      t.string :name
      t.text :description
      t.datetime :target

      t.timestamps
    end
  end
end
