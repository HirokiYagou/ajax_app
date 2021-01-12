json.posts do
  json.array! @posts, :id, :content, :checked, :created_at, :updated_at
end