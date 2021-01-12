class PostsController < ApplicationController

  def index
    @posts = Post.all.order(id: "DESC")
    shared_data[:posts] = @posts
    # binding.pry
    # do |format|
    #   format.html
    # end
  end
  
  # def new
  # end

  def create
    post = Post.create(content: params[:content], checked: false)
    render json: {post: post}
    # redirect_to action: :index
  end

  def checked
    # binding.pry
    post = Post.find(params[:id])
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item}
  end
  
end