class AddDetailsToUser < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    add_column :users, :honor_title, :string
    add_column :users, :level, :integer
    add_column :users, :intro, :text
  end
end
