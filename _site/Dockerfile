FROM jekyll/jekyll:latest

RUN gem install bundler

COPY ./ ./

RUN bundle install

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]