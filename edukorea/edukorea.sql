-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 11 Jul 2022 pada 20.14
-- Versi server: 8.0.29-0ubuntu0.20.04.3
-- Versi PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edukorea`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `abouts`
--

CREATE TABLE `abouts` (
  `id` int NOT NULL,
  `abouts_text` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `abouts`
--

INSERT INTO `abouts` (`id`, `abouts_text`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mi ligula. Aliquam faucibus congue elit, quis pellentesque diam faucibus nec. Sed dictum posuere risus quis aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis nec lorem feugiat, accumsan arcu ac, commodo leo. Curabitur tristique sem gravida ante sagittis tincidunt. Proin porttitor, diam sit amet ultricies lobortis, metus odio efficitur massa, vitae malesuada urna metus et neque. Vestibulum placerat hendrerit neque tincidunt hendrerit. Donec placerat pretium diam, non fringilla ipsum feugiat quis. Aliquam viverra ex arcu, ac tempor velit porttitor a. Duis dictum turpis eget pulvinar eleifend. Fusce venenatis, neque non ullamcorper eleifend, turpis nunc feugiat neque, id porta dui nulla eu velit. Vivamus suscipit ultricies justo, nec dignissim nulla convallis in. Pellentesque molestie sodales purus, a scelerisque enim mattis venenatis. Sed mattis odio ut blandit elementum. Praesent ullamcorper est pulvinar mi accumsan pretium. Mauris ullamcorper feugiat porttitor. Morbi ac rhoncus lectus, sed fringilla massa. ');

-- --------------------------------------------------------

--
-- Struktur dari tabel `alphabets`
--

CREATE TABLE `alphabets` (
  `id` int NOT NULL,
  `alphabets_korea` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `consonants` varchar(255) NOT NULL,
  `alphabets_indonesia` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `alphabets`
--

INSERT INTO `alphabets` (`id`, `alphabets_korea`, `consonants`, `alphabets_indonesia`) VALUES
(2, 'ㄱ', '기역', 'giyeok'),
(3, 'ㄱ', '기역', 'giyeok'),
(4, 'ㄱ', '기역', 'giyeok'),
(5, 'ㄱ', '기역', 'giyeok');

-- --------------------------------------------------------

--
-- Struktur dari tabel `answers`
--

CREATE TABLE `answers` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `no_quiz` int NOT NULL,
  `answer` varchar(255) NOT NULL,
  `code_quiz` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `answers`
--

INSERT INTO `answers` (`id`, `user_id`, `no_quiz`, `answer`, `code_quiz`) VALUES
(1, 1, 2, 'c', 'time.Date(2022, time.July, 7, 10, 32, 34, 78645382, time.Local)'),
(2, 1, 1, 'a', 'time.Date(2022, time.July, 9, 22, 17, 5, 248000937, time.Local)'),
(3, 1, 2, 'd', 'time.Date(2022, time.July, 9, 22, 17, 5, 455608384, time.Local)'),
(4, 1, 3, 'b', 'time.Date(2022, time.July, 9, 22, 17, 5, 510833477, time.Local)'),
(5, 1, 4, 'd', 'time.Date(2022, time.July, 9, 22, 17, 5, 567669407, time.Local)'),
(6, 1, 5, 'a', 'time.Date(2022, time.July, 9, 22, 17, 5, 628930611, time.Local)'),
(7, 1, 6, 'c', 'time.Date(2022, time.July, 9, 22, 17, 5, 757759203, time.Local)'),
(8, 1, 7, 'a', 'time.Date(2022, time.July, 9, 22, 17, 5, 964176842, time.Local)'),
(9, 1, 8, 'c', 'time.Date(2022, time.July, 9, 22, 17, 6, 80043985, time.Local)'),
(10, 1, 9, 'a', 'time.Date(2022, time.July, 9, 22, 17, 6, 168453487, time.Local)'),
(11, 1, 10, 'c', 'time.Date(2022, time.July, 9, 22, 17, 6, 271509920, time.Local)');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kamus`
--

CREATE TABLE `kamus` (
  `id` int NOT NULL,
  `word_korea` varchar(255) NOT NULL,
  `consonants` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `word_indonesia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `kamus`
--

INSERT INTO `kamus` (`id`, `word_korea`, `consonants`, `word_indonesia`) VALUES
(5, 'ㄱ', '기역', 'testing');

-- --------------------------------------------------------

--
-- Struktur dari tabel `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int NOT NULL,
  `quiz` varchar(255) NOT NULL,
  `a` varchar(255) NOT NULL,
  `b` varchar(255) NOT NULL,
  `c` varchar(255) NOT NULL,
  `d` varchar(255) NOT NULL,
  `correct` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `quizzes`
--

INSERT INTO `quizzes` (`id`, `quiz`, `a`, `b`, `c`, `d`, `correct`) VALUES
(2, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c'),
(3, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c'),
(4, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c'),
(5, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c'),
(6, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c'),
(7, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c'),
(8, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c'),
(9, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c'),
(10, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c'),
(11, 'Berapa jumlah huruf vokal dasar dalam Hangeul?', '8', '9', '10', '11', 'c');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Wandi Pratama', 'wandipratama@gmail.com', '$2a$04$eyf2Cn/0XPeehFWrdxcxsuUzBE/DgwbbuYasQZsQzdw1wNguFVh9q', 'user'),
(2, 'Umar', 'umar@gmail.com', '$2a$04$zBpxqqTGhPYWdpiD1mh06exgiE8A3DMg4iZvzTfVaSyO0BxZe6P1K', 'user'),
(3, 'Admin', 'admin@gmail.com', '$2a$04$zBpxqqTGhPYWdpiD1mh06exgiE8A3DMg4iZvzTfVaSyO0BxZe6P1K', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `abouts`
--
ALTER TABLE `abouts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `alphabets`
--
ALTER TABLE `alphabets`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kamus`
--
ALTER TABLE `kamus`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `abouts`
--
ALTER TABLE `abouts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `alphabets`
--
ALTER TABLE `alphabets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `kamus`
--
ALTER TABLE `kamus`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
