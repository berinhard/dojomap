task :import => :environment do
  CoopImporter.new
end
