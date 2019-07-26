class CreateCarbons < ActiveRecord::Migration[5.2]
  def change
    create_table :carbons do |t|
      t.decimal :before
      t.decimal :after
      t.timestamps
    end
  end
end
