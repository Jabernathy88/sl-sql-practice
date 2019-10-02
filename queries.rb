# 1. Find the country with the highest number of engineers.
solution_1 = Country
  .left_joins(:engineers)
  .group(:id)
  .order('COUNT(engineers.id) DESC')
  .first

# puts "I am solution #1: "
# pp solution_1

# 2. Find the three teams with the highest number of engineers and order them by the number of bugs, largest first.
solution_2 = Team
  .left_joins(:engineers)
  .group(:id)
  .order('COUNT(engineers.id) DESC')
  .take(3)

solution_2.sort_by { |team| team[:current_bugs] }
solution_2.reverse!

# puts "I am solution #2: "
# pp solution_2

# 3. Find the oldest engineer with a repository written using functional programming. If needed, the winner is the one with the most functional programming repositories.

solution_3 = Engineer
  .joins(:programming_languages)
  .group(:id)
  .where(programming_languages: { category: 'Functional' } )
  .order(age: :desc)
  .order("COUNT(programming_languages.category = 'Functional') DESC")
  .first

# puts "I am solution #3: "
# pp solution_3

# 4. Find the second least represented region across all the teams.
# NOT CORRECT
solution_4 = Engineer
  .group(:id)
  .joins(:country)
  .group(:region)
  .order("COUNT(engineers.id) DESC")
  .order("countries.region DESC")

# puts "I am regions: "
# pp solution_4

# 5. Find who published the book with the highest average rating.
# INCOMPLETE
solution_5 = Bookshelf.all.sort_by { |shelf| shelf[:rating].to_i }

# puts "I am solution 5: "
# pp solution_5.reverse!.first

# 6. Find the capital of the country where the oldest person in the team that shipped the most features comes from.
team_most_features = Team.order(features_shipped: :desc).first
oldest_on_team = Engineer.where(team: team_most_features).order(age: :desc).first
solution_6 = oldest_on_team.country.capital

puts "I am solution 6: "
pp solution_6

# 7. Find the inventor of the third most used programming language by the teams on the most populated floor.
# HERE

# 8. Find the book least read by the the engineers who develop in Ruby.
