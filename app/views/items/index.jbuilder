json.array! @items do |item|
  json.id item[:id]
  json.name item[:name]
  json.type item[:type]
  json.task item[:task]
  json.user item[:user]
end