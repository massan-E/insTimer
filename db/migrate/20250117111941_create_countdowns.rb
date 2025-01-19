class CreateCountdowns < ActiveRecord::Migration[7.2]
  def change
    create_table :countdowns do |t|
      t.string :name
      t.text :description
      t.datetime :target
      t.integer :number_of_cheers, null: false, default: 0
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
