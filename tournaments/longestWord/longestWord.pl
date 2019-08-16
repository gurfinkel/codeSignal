#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub longestWord {
    my ($text) = @_;

    my @words = $text =~ m/([A-Za-z]+)/g;
    my $result = '';

    foreach my $word (@words) {
        if (length($result) < length($word)) {
            $result = $word;
        }
    }

    return $result;
}
