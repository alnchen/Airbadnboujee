# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170526035828) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.integer  "listing_id",    null: false
    t.integer  "num_of_guests", null: false
    t.date     "check_in",      null: false
    t.date     "check_out",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "listings", force: :cascade do |t|
    t.integer  "owner_id",    null: false
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.integer  "price",       null: false
    t.string   "image_url",   null: false
    t.string   "title",       null: false
    t.text     "description", null: false
    t.string   "city",        null: false
    t.string   "state",       null: false
    t.string   "country",     null: false
    t.integer  "max_guests",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "listing_id", null: false
    t.float    "rating",     null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
