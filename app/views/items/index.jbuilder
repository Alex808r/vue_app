json.array! @items do |item|
  json.id item[:id]
  json.name item[:name]
  json.text item[:text]
end