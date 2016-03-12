class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :tag
      t.string :title
      t.string :secondary_title
      t.text :content

      t.timestamps null: false
    end
  end
end
