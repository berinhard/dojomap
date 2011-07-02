class CoopImporter

  def initialize
    Coop.destroy_all
    coops = JSON.load(File.read("#{RAILS_ROOT}/db/coops.json"))

    coops.each do |coop|
      Coop.create(coop)
    end
  end

end
