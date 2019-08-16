#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub symbolsPermutation {
    my ($word1, $word2) = @_;

    return join('', sort(split('', $word1))) eq join('', sort(split('', $word2)));
}
