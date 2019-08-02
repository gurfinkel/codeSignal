#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub quadraticEquation {
    my ($a, $b, $c) = @_;

    my $d =  $b ** 2 - 4 * $a * $c;

    if (0 > $d) {
        return [];
    }

    if (!$d) {
        return [-$b / (2 * $a)];
    }

    my @result;

    push(@result, (-$b - sqrt($d)) / (2 * $a));
    push(@result, (-$b + sqrt($d)) / (2 * $a));

    my @sortedResult = sort {$b<=>$a} @result;

    return \@sortedResult;
}
