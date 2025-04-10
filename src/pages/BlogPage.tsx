import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, SquirrelIcon } from "lucide-react";

const blogPosts = [
  {
    slug: "mastering-react-native-navigation",
    title: "Mastering React Native Navigation",
    excerpt:
      "A deep dive into React Navigation v6 and best practices for managing navigation in React Native apps. Learn about the latest features and how to implement complex navigation patterns.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["React Native", "Navigation", "Tutorial"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    content: `
      React Navigation has become the de facto standard for handling navigation in React Native applications. In this comprehensive guide, we'll explore the latest features of React Navigation v6 and learn how to implement complex navigation patterns effectively.

      First, we'll cover the basics of stack navigation and how to properly structure your navigation hierarchy. Then, we'll dive into more advanced topics like nested navigators, authentication flows, and deep linking.
    `,
  },
  {
    slug: "typescript-tips-react-native",
    title: "TypeScript Tips for React Native",
    excerpt:
      "Essential TypeScript patterns and practices that will make your React Native development more robust. Discover how to leverage TypeScript's type system effectively.",
    date: "March 10, 2024",
    readTime: "6 min read",
    tags: ["TypeScript", "React Native", "Best Practices"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    content: `
      TypeScript has transformed how we write React Native applications, bringing type safety and enhanced developer experience to our projects. In this article, we'll explore essential TypeScript patterns and practices that will help you write more maintainable and robust React Native applications.

      We'll cover topics like proper typing of props and state, handling navigation params, and working with third-party libraries in a type-safe way.
    `,
  },
  {
    slug: "aws-amplify-react-native",
    title: "AWS Amplify and React Native",
    excerpt:
      "How to integrate AWS Amplify with React Native for seamless backend integration. A complete guide to setting up authentication, storage, and API services.",
    date: "March 5, 2024",
    readTime: "10 min read",
    tags: ["AWS", "React Native", "Backend"],
    image:
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&q=80&w=800",
    content: `
      AWS Amplify provides a powerful set of tools and services that can significantly speed up the development of React Native applications. In this comprehensive guide, we'll walk through the process of integrating AWS Amplify with React Native and explore its key features.

      We'll cover authentication, storage solutions, API integration, and best practices for securing your application.
    `,
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <SquirrelIcon size={32} className="text-blue-400" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Blog Header */}
      <header className="container mx-auto px-4 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Blog & Thoughts
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sharing my experiences, insights, and learnings about mobile
            development, React Native, and the tech industry.
          </p>
        </motion.div>
      </header>

      {/* Blog Posts */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.slug} {...post} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  delay: number;
}

function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  tags,
  image,
  delay,
}: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group flex flex-col md:flex-row bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10"
    >
      {/* Image Section */}
      <div className="md:w-1/3 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex gap-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {readTime}
            </span>
          </div>
          <h2 className="text-2xl font-light mb-4 group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          <p className="text-gray-300 mb-4 font-light">{excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-light"
        >
          Read More
          <ArrowLeft size={16} className="rotate-180" />
        </Link>
      </div>
    </motion.article>
  );
}

export { blogPosts };
export default BlogPage;
