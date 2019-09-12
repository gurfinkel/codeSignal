#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub arrayReplace {
    my ($inputArray, $elemToReplace, $substitutionElem) = @_;

    my @result = map { $elemToReplace == $_ ? $substitutionElem : $_ } @$inputArray;

    return \@result;
}
