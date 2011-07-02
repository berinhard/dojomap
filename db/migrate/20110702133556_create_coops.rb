class CreateCoops < ActiveRecord::Migration
  def self.up
    create_table :coops do |t|
      t.string :lat_long, :city, :postal_code, :name, :district, :address, :material
    end
    add_index :coops, :lat_long
  end

  def self.down
    drop_table :coops
  end
end
